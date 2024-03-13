import StaggerText from "./animations/StaggerText";

export default function SectionHeader({ title, subTitle} : { title: string, subTitle: string}) {
  return (
    <div className="w-full flex flex-col items-center sm:items-start">
      <h2 className="text-5xl font-medium opacity-30 uppercase text-center sm:text-left sm:text-6xl">
        <StaggerText aos>{title}</StaggerText>
        </h2>
      <p className="font-medium mt-1 text-md text-center sm:text-left sm:text-xl">
        <StaggerText aos>{subTitle}</StaggerText>
      </p>
    </div>
  )
}