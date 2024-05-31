import TextGlitcher from "@/components/text-glitcher";

export default function Home() {
  const chars = ['p', 'r', 'o', 'd', 'u', 'c', 't'
  ];

  console.log(chars.reduce((acc, char) => acc + (Math.random() < 0.5 ? char.textContent : ''), ''))
  return (
    <main className="flex flex-col min-h-screen bg-black p-6">
      <TextGlitcher text={"Product"} /> 
      {/* <Hero /> */}
      {/* <ScrambleText text="Product" scrambleDuration={0.3} hoverSoundUrl={'/audio/UI_menu_text_rollover.mp3'} /> */}
      {/* <ScrambleText item={{
        label: 'Product',
        to: '/'
      }} /> */}
    </main>
  )
}
