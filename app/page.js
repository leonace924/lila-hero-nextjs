import TextGlitcher from "@/components/text-glitcher";

export default function Home() {
  const chars = ['p', 'r', 'o', 'd', 'u', 'c', 't'
  ];

  console.log(chars.reduce((acc, char) => acc + (Math.random() < 0.5 ? char.textContent : ''), ''))
  return (
    <main className="flex flex-col min-h-screen bg-black p-10">
      <TextGlitcher text={"PROTOCOL"} /> 
      <TextGlitcher text={"JOURNAL"} /> 
      <TextGlitcher text={"MEDIA"} /> 
      <TextGlitcher text={"GALLERY"} /> 
      <TextGlitcher text={"ABOUT"} /> 
      {/* <Hero /> */}
      {/* <ScrambleText text="Product" scrambleDuration={0.3} hoverSoundUrl={'/audio/UI_menu_text_rollover.mp3'} /> */}
      {/* <ScrambleText item={{
        label: 'Product',
        to: '/'
      }} /> */}
    </main>
  )
}
