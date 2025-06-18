import Image from "next/image";
import { format } from "date-fns";

type ClassCardProps = {
    cls: {
        id: string;
        title: string;
        description: string;
        startTime: string;
        durationMins: number;
        instructor: string;
        imageUrl?: string | null;
    };
    onBook: (classId: string) => void;
    isBooked: boolean;
    bookingPending: boolean;
};

export default function ClassCard({ cls, onBook, isBooked, bookingPending }: ClassCardProps) {
    return (
        <div className="border rounded p-4 flex flex-col gap-2">
            {cls.imageUrl && (
                <Image  
                    src={cls.imageUrl}
                    alt={cls.title}
                    width={300}
                    height={200}
                    className="rounded-md"
                />
            )}
            <h3 className="text-lg font-semibold">{cls.title}</h3>
            <p className="text-sm text-gray-600">{cls.description}</p>
            <p className="text-sm">
                {format(new Date(cls.startTime), "MMM d, yyyy h:mm a")} • {cls.durationMins} m 
            </p>
            <p className="text-sm text-gray-500">Instructor: {cls.instructor}</p>

            <button
                className={`mt-auto px-4 py-2 rounded ${
                    isBooked
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-blue-500 text-white'
                } disabled:opacity-50`}
                onClick={() => !isBooked && onBook(cls.id)}
                disabled={isBooked || bookingPending}
            >
                {isBooked ? 'Booked' : bookingPending ? 'Booking...' : 'Book Class'}
            </button>
        </div>
    )
}
