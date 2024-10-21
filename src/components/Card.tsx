
interface CardProps {
    image: string,
    title: string,
    description?: string
}

export default function Card({ image, title, description }: CardProps) {
    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 w-full">
            {image}
            {title}
            {description}
        </div>
    )
}