import { getSession } from '@auth0/nextjs-auth0';
import Image from "next/image";

export const TrainerCard = async () => {
    const session = await getSession();

    const trainer = session?.user;

  return (
    <div className="flex flex-col items-center gap-2">
      {!!trainer && (
        <>
          <div className="flex flex-row">
                <Image
                    src={trainer.picture ?? ''}
                    alt={trainer.name ?? ''}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <h2 className="text-5xl font-pixel font-bold">{trainer.name}</h2>
            </div>

            <div className="flex flex-col items-left gap-2">
              {Object.entries(trainer).map(([key, value]) => (
                <div key={key}>
                    {key + ": " + String(value)}
                </div>
              ))}
            </div>

        </>
      )}
    </div>
  );
};
