import { useState, useEffect } from 'react'
import { useDocumentOperation, useClient } from 'sanity'

export function SwapOrderAction(props: any) {
  const { publish } = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
  const client = useClient({ apiVersion: '2024-01-01' })

  useEffect(() => {
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [isPublishing, props.draft])

  return {
    // FIXED: The !! converts the string reason into a boolean (true/false)
    // This stops the TypeScript error on Vercel
    disabled: !!publish?.disabled,
    label: isPublishing ? 'Swapping...' : 'Publish & Swap',
    onHandle: async () => {
      setIsPublishing(true)

      const newNum = props.draft?.orderNumber
      const oldNum = props.published?.orderNumber

      if (newNum && newNum !== oldNum) {
        const victim = await client.fetch(
          `*[_type == "store" && orderNumber == $newNum && _id != $id && !(_id in path("drafts.**"))][0]`,
          { newNum, id: props.id }
        )

        if (victim && oldNum) {
          await client.patch(victim._id).set({ orderNumber: oldNum }).commit()
        }
      }

      if (publish) {
        publish.execute()
      }
      props.onComplete()
    },
  }
}