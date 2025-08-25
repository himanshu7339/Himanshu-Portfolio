
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <div
        className="animate-spin rounded-full h-12 w-12 border-t-4"
        style={{ borderColor: "#193c63 transparent transparent transparent" }}
      ></div>
      <span className="ml-4 text-[#193c63] font-semibold text-lg">
        Loading form...
      </span>
    </div>
  );
}
