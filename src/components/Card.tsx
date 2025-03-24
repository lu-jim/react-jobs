interface CardProps {
  card_name: string;
  tag: string;
  cta: string;
  ctaLink: string;
}



const Card = ({ card_name, tag, cta, ctaLink }: CardProps) => {
  return (
    <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{card_name}</h2>
      <p className="mt-2 mb-4">
        {tag}
      </p>
      <a
        href={ctaLink}
        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
      >
        {cta}
      </a>
    </div>
  )
}

export default Card