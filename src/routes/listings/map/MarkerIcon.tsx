export const MarkerIcon = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div
      className={`h-5 w-5 rounded-full border-[3px] border-white bg-primary-500 shadow-pin transition hover:border-primary-500 hover:bg-white`}
      style={{
        zIndex: 5,
        transform: isHovered ? "scale(1.2)" : "scale(1)",
        borderColor: isHovered ? "#5B4DFF" : "white",
        backgroundColor: isHovered ? "white" : "#5B4DFF",
      }}
    ></div>
  );
};
