import { type CVData } from '@/types/cvdata';

export default function Professional({ data }: { data: CVData }) {

    return (
        <>
            {/* Top section */}
            <section>
                {/* Name, role */}
                <div className=''>
                    <h1>
                        {data.fullname}
                    </h1>
                    <h2 className=''>
                        {}
                    </h2>
                </div>
                {/* Contact, links */}
                <div>

                </div>
            </section>


        </>
    );
}