import React, { useEffect } from "react";

function Allocate_task() {
  return (
    <div className="bg-white p-4 rounded flex flex-col gap-4">
      <div>
        <h2 className="text-black text-xl font-semibold text-center">
          Allocate Task
        </h2>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black text-lg" htmlFor="sel_employee">
          Select Empoloyee
        </label>
        <select
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  d dark:placeholder-gray-400 "
          name="sel_employee"
          id="sel_employee"
        >
          <option value="0000">--Select--</option>
          <option value="0001">Abhishek</option>
          <option value="0002">Kartikey</option>
          <option value="0003">Harpreet</option>
          <option value="0004">Harshpreet</option>
          <option value="0005">Gaurav</option>
          <option value="0006">Aniket</option>
          <option value="0006">Nikhil</option>
          <option value="0006">Ankit</option>
          <option value="0006">Rohit</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black text-lg" htmlFor="task_desc">
          Task Description
        </label>
        <textarea
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  d dark:placeholder-gray-400 "
          name="task_desc"
          id="task_desc"
        ></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black text-lg" htmlFor="deadline">
          Deadline Date
        </label>
        <input
          type="date"
          className="bg-white border ccent-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5   "
          name="deadline"
          id="deadline"
        />
      </div>
      <div className="flex flex-col gap-3 md:items-center">
        <button className="w-full md:w-40 rounded-[8px] border-gray-300 text-white border-2 py-2 cursor-pointer font-semibold text-[16px] bg-blue-500">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Allocate_task;
