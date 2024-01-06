import React from 'react';

const Table = ({ data }) => {
  return (

    <>
    <div className="">
      
      <h2 className="text-xl font-bold mb-4">URLs</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Long URL</th>
            <th className="py-2 px-4 border">Short ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td className="text-white py-2 px-4 border">{item.redirectURL}</td>
              <td className="text-white py-2 px-4 border">{item.shortId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;
