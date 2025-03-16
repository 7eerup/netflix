'use client'

import Image from "next/image"
import Link from "next/link";

export default function Logo() {
    // 정적인 로컬 이미지라면 public 폴더를 활용
    return (
    <div className="flex items-center gap-1">
        <Link href="/">
        <Image 
        src="/images/tmdbflix_logo.png" 
        alt="TMDBFLIX Logo" 
        width={50}
        height={30}
        className="!w-20 !h-auto"
        />
        </Link>
    </div>
    );
}