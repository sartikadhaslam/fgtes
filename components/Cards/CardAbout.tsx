import Image from "next/image";

type DataProps = {
  title? : string,
  icon? : string,
  desc? : string
}

export default function CardAbout(props: DataProps) {
  const {title,desc} = props;

  return (
    <div className="w-full p-5 bg-[#EC407A] rounded-lg group hover:bg-[#ec4079d4]">
      <div className="flex flex-col items-center">
        <div className="py-2 space-x-4 group-hover:hidden">
          <Image 
          src={`${props.icon}`}
          alt="icon picture"
          width={80}
          height={80}
          />
        </div>
        <div className="py-2 space-x-4 group-hover:pt-0">
          <h2 className="font-bold text-lg text-white font-mulish">{title}</h2>
        </div>
        <div className="space-x-4 group-hover:pt-0">
          <hr className="hidden group-hover:block h-px w-40 bg-gray-200 border-0"></hr>
        </div>
        <div className="pt-2 hidden group-hover:block group-hover:text-white group-hover:text-xs font-montserrat"><p>{desc}</p></div>
      </div>
    </div>
  )
}
