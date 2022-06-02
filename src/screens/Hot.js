import Meme from "../components/Meme";
import MEMES from "../memes_mock";

function Hot() {
  console.log(MEMES);
  return (
    <main style={{padding: "1rem 0"}}>
      <h2>Hot</h2>
      {MEMES.map((meme, index) =>
        <Meme key={index} props={meme}/>
      )}
    </main>
  );
}

export default Hot;
