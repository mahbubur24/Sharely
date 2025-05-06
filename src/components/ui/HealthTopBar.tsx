import SectionTitle from '@/components/shared/SectionTitle';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function HealthTopBar({category}:{category:string}) {

    return (
        <div className="flex w-full mb-10 items-center">
          {/* Left Title with vertical line */}
         <SectionTitle category={category}/>
          {/* Right View All Link */}
          <Link href={`/`} className="flex items-center text-red-500 text-sm font-medium hover:underline">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      );
}

export default HealthTopBar