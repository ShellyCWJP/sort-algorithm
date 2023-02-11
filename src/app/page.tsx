"use client";
import { useState } from "react";
import Radio from "@/components/Radio";
import Button from "@/components/Button";
import * as sort from "@/utils/sorts";
import { SORT_TYPES } from "@/constants";

export default function Home() {
  const [sortType, setSortType] = useState(SORT_TYPES[0].value);
  const [originalData, setOriginalData] = useState("3,1,4,5,9,2,6,5,3,5");
  const [result, setResult] = useState("");
  const setSortTypeHandler = (value: string) => {
    setSortType(value);
  };

  const setResultHandler = (value: string) => {
    if (value === "") {
      setResult(value);
      return;
    }
    const data = value.split(",").map((item) => parseInt(item));
    const result = sort[sortType](data);
    setResult(result.join(","));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSortTypeHandler(event.target.sort.value);
    setResultHandler(event.target.input.value);
  };

  return (
    <div className="w-screen h-screen grid place-content-center bg-gradient-to-t from-gray-300 to-gray-100 p-4">
      <div className="max-w-screen-sm min-w-fit bg-gray-100 backdrop-blur-xl p-10 drop-shadow-xl rounded-xl border border-gray-200">
        <header>
          <h1 className="text-3xl font-semibold text-sky-700">
            ソートアルゴリズム課題
          </h1>
        </header>
        <main className="mt-14">
          <form id="sort-form" onSubmit={submitHandler}>
            <ul className="flex items-center gap-5">
              {SORT_TYPES.map((sortType) => (
                <li key={sortType.id}>
                  <Radio
                    id={sortType.id}
                    name="sort"
                    value={sortType.value}
                    label={sortType.label}
                    checked={sortType.checked}
                    onClick={() => setSortTypeHandler(sortType.value)}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <p className="text-gray-700 text-sm my-2">
                カンマ区切りで数字を入力してください
              </p>
              <input
                type="text"
                id="input"
                name="input"
                defaultValue={originalData}
                className="w-full block border border-gray-300 rounded-md p-2 tracking-wider"
                pattern="^[0-9,]+$"
              />
            </div>

            <div className="mt-5">
              <Button id="sort-button" type="submit" variant="primary">
                ソートを実行する
              </Button>
            </div>
          </form>

          <div className="mt-14">
            <p className="text-gray-700 text-sm my-2">ソート結果</p>
            <output
              form="soft-form"
              name="sort-form-result"
              className="bg-white py-2 px-4 w-full block text-lg tracking-wider shadow-sm h-12"
            >
              {result}
            </output>
            <div className="mt-5">
              <Button
                id="sort-button"
                type="button"
                variant="secondary"
                onClick={() => setResultHandler("")}
              >
                ソート結果を空にする
              </Button>
            </div>
          </div>
        </main>
      </div>
      <footer className="mt-5 text-center text-gray-700 text-xs">
        <p>
          <a
            href="https://github.com/ShellyCWJP/sort-algorithm"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-sky-700"
          >
            View source code on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
