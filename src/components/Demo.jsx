import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("제출설공");
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* 검색 */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            className="absolute left-0 my-2 ml-3 w-5"
            src={linkIcon}
            alt="link_icon"
          />
          <input
            className="url_input peer"
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⏎
          </button>
        </form>

        {/* URL 기록 검색 */}
      </div>

      {/* 결과 표시 */}
    </section>
  );
};

export default Demo;
