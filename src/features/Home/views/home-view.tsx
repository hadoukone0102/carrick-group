import CarrickServices from "@/features/services/views/CarrickServices";
import Banner from "@/features/shared/components/banner";

export default function HomePage (){
    return (
        <div className="mb-4">
            <Banner/>
            
            {/** Les services */}
            <div>
                <CarrickServices/>
            </div>

            {/** Les realisations */}

            {/** Les projets en cours */}
        </div>
    )
}