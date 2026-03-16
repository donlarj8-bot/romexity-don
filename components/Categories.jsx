// import React from 'react';

// export default function Categories({ categories, setSearchTerm }) {
//   return (
//     <section className="flex items-center gap-12 overflow-x-auto pb-6 no-scrollbar border-b border-gray-100">
//       {categories.map((cat) => (
//         <div 
//           key={cat.name} 
//           onClick={() => setSearchTerm(cat.name)}
//           className="flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-all min-w-fit border-b-2 border-transparent hover:border-black pb-2"
//         >
//           <span className="text-2xl">{cat.icon}</span>
//           <span className="text-xs font-semibold uppercase tracking-wide">{cat.name}</span>
//         </div>
//       ))}
//     </section>
//   );
// }