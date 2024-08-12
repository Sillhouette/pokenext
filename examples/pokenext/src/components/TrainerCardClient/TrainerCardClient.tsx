'use client';

import { getRoles } from '@/utils/getRoles';
import { UserProfile, useUser } from '@auth0/nextjs-auth0/client';
import Image from "next/image";

export const TrainerCardClient = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const trainer = user;

  const otherUser: UserProfile = {
      goodrx_roles: ['admin', 'user'],
  }

  const roles = trainer && getRoles({ user: otherUser });

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
                Roles: {roles}

              {Object.entries(trainer).map(([key, value]) => (
                <div key={key}>
                    {key + ": " + JSON.stringify(value, null, 4)}
                </div>
              ))}
            </div>

        </>
      )}
    </div>
  );
}
