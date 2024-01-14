import React from 'react';

export function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-screen min-h-screen fixed -z-[1] flex justify-center p-[120px_24px_160px_24px] pointer-events-none dark:invert">
                <div className="bg-[radial-gradient(circle,rgba(2,0,36,0)0,#fafafa_100%)] absolute content-[''] z-[2] w-full h-full top-0" />
                <div
                    className={
                        "content-[''] bg-grid-pattern z-[1] absolute w-full h-full top-0 opacity-[0.4] invert-[1]"
                    }
                />
                <div className="z-[3] w-full max-w-[640px] bg-radial-gradient-pattern absolute h-full blur-[100px] saturate-[150%] top-[80px] opacity-[0.15]" />
                <div className="z-10 pointer-events-auto" />
            </div>
            {children}
        </>
    );
}
