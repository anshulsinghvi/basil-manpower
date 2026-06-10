import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import AdminLayout from "../components/AdminLayout";
import * as XLSX from "xlsx";
const Messages = () => {
  const [messages, setMessages] = useState([]);
const exportToExcel = () => {
  const formattedData = messages.map((msg) => ({
    Name: msg.name,
    Phone: msg.phone,
    Email: msg.email,
    Message: msg.message,
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(formattedData);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Messages"
  );

  XLSX.writeFile(
    workbook,
    "Messages.xlsx"
  );
};
  useEffect(() => {
    
    fetchMessages();
  }, []);
const deleteMessage = async (id) => {
  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
  } else {
    alert("Message Deleted");
    fetchMessages();
  }
};
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setMessages(data);
    }
  };

 
return (
  <AdminLayout>
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Messages Management
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage all contact form submissions.
          </p>
        </div>

        <button
          onClick={exportToExcel}
          className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
        >
          Export Messages.xlsx
        </button>
      </div>

      <div className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-5 text-left font-semibold text-slate-700">
                Name
              </th>
              <th className="p-5 text-left font-semibold text-slate-700">
                Phone
              </th>
              <th className="p-5 text-left font-semibold text-slate-700">
                Email
              </th>
              <th className="p-5 text-left font-semibold text-slate-700">
                Message
              </th>
              <th className="p-5 text-left font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className="border-b border-slate-100 transition hover:bg-sky-50"
              >
                <td className="p-5 font-medium text-slate-900">
                  {msg.name}
                </td>

                <td className="p-5 text-slate-600">
                  {msg.phone}
                </td>

                <td className="p-5 text-slate-600">
                  {msg.email}
                </td>

                <td className="max-w-md p-5 text-slate-600">
                  {msg.message}
                </td>

                <td className="p-5">
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="rounded-xl bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

};

export default Messages;