import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyTasks, editTaskStatus } from "../../redux/slice/myTaskSlice";
import toast from "react-hot-toast";
import BouncingDotsLoader from "../../ui/Loaders";

function MyTask() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.myTask);
  const myTasks = Array.isArray(list) ? list : [];

  const [editId, setEditId] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMyTasks());
  }, [dispatch]);

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditedStatus(task.status);
  };

  const handleSave = async () => {
    try {
      await dispatch(
        editTaskStatus({ id: editId, status: editedStatus })
      ).unwrap();
      toast.success("Task status updated!");
      setEditId(null);
    } catch {
      toast.error("Update failed");
    }
  };

  // Filter tasks based on search query (by id or name, case-insensitive)
  const filteredTasks = myTasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-dvh flex flex-col bg-gray-100 p-3 rounded shadow-md">
      <h1 className="text-2xl font-bold text-center uppercase text-black">
        My Tasks
      </h1>
      <p className="text-black mt-2">Manage your tasks status below:</p>

      <input
        type="text"
        placeholder="Search by Task ID or Name..."
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full max-w-md text-black mt-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading ? (
        <BouncingDotsLoader />
      ) : error ? (
        <p className="text-center text-red-600 mt-4">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto mt-1">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="text-gray-100 bg-blue-400">
              <tr>
                <th className="p-2.5 text-left">Task Id</th>
                <th className="p-2.5 text-left">Task Name</th>
                <th className="p-2.5 text-left">Description</th>
                <th className="p-2.5 text-left">Status</th>
                <th className="p-2.5 text-left">Due Date</th>
                <th className="p-2.5 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t text-black hover:bg-gray-300 transition-colors"
                >
                  <td className="p-2.5">{task.id}</td>
                  <td className="p-2.5">{task.name}</td>
                  <td className="p-2.5">{task.description}</td>
                  <td className="p-2.5">
                    {editId === task.id ? (
                      <select
                        value={editedStatus}
                        onChange={(e) => setEditedStatus(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      task.status
                    )}
                  </td>
                  <td className="p-2.5">{task.dueDate}</td>
                  <td className="p-2.5">
                    {editId === task.id ? (
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:underline cursor-pointer"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(task)}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredTasks.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyTask;
