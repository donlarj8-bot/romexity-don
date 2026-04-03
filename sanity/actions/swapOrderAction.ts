import { useState, useEffect } from 'react'
import { useDocumentOperation, useClient } from 'sanity'

export function SwapOrderAction(props: any) {
  const { publish } = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
  
  // FIXED: This is the correct way to get the client in Sanity v3
  const client = useClient({ apiVersion: '2024-01-01' })

  useEffect(() => {
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [isPublishing, props.draft])

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Swapping...' : 'Publish & Swap',
    onHandle: async () => {
      setIsPublishing(true)

      const newNum = props.draft?.orderNumber
      const oldNum = props.published?.orderNumber

      // Logic: If the number changed, find the "victim" at the new spot
      if (newNum && newNum !== oldNum) {
        // We look for the shop that currently has the number we want
        const victim = await client.fetch(
          `*[_type == "store" && orderNumber == $newNum && _id != $id && !(_id in path("drafts.**"))][0]`,
          { newNum, id: props.id }
        )

        // If that spot is taken, tell the "victim" to take our old number
        if (victim && oldNum) {
          await client.patch(victim._id).set({ orderNumber: oldNum }).commit()
        }
      }

      // Finally, publish our current shop with the new number
      publish.execute()
      props.onComplete()
    },
  }
}