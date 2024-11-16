"use client";

export default function Footer() {
    return(
        <div> 
        <footer className="bg-gray-800 text-gray-300 py-6">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
    <div>
      <h3 className="font-bold text-lg mb-2">About</h3>
      <p>Welcome to my personal website, where I share my journey in technology and coding.</p>
      <p>Always exploring and learning new things in the cloud computing space.</p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Inspiration</h3>
      <p>"Code is like humor. When you have to explain it, it’s bad."</p>
      <p>"Dream big, start small, act now."</p>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Fun Facts</h3>
      <p>Favorite language: Python.</p>
      <p>Learning: Cloud Engineering & TypeScript.</p>
      <p>Can spend hours debugging happily.</p>
    </div>
  </div>
</footer>

        </div>
    )
}
