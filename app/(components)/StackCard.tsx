export default function StackCard({nom, link} : {nom : string; link: string}) {
    return (
        <div className="flex flex-col items-center">
            <img src={`/icons/${link}.svg`} alt={`Logo ${nom}`} className="w-12 h-12 mb-2" />
            <span className="text-white/90">{nom}</span>
        </div>
    )
}