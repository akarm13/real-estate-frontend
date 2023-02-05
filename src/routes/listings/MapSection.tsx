export const MapSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-14 ">
      <h2 className="text-2xl font-semibold">Location</h2>

      <iframe
        className="max-w-[720px] h-[653px]"
        src="https://maps.google.com/maps?width=721&amp;height=510&amp;hl=en&amp;q=sulaymaniyah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};
