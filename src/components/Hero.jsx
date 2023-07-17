import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/adrianhadjdin")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        문단 요약을 쉽게하자! <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        당신이 읽을 부분들을 오픈소스 summarizer에게 맡겨보세요,
        <br />
        이것은 읽어야할 문장의 길이를 줄여주고 올바르게 요약해줍니다!
      </h2>
    </header>
  );
};

export default Hero;
