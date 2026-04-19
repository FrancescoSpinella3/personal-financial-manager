import { UserRound } from "lucide-react";
import ContainerItem from "./ContainerItem";
import { useAuth } from "../../../context/AuthContext";
import ViewAllLink from "../../ui/ViewAllLink";

export default function SummaryUserProfile() {
    const { user } = useAuth();

    // Default user data classes
    const labelClasses = "font-medium text-sm text-(--dark-main-color) dark:text-(--light-color)";
    const valueClasses = "font-normal text-sm text-(--dark-second-color) dark:text-(--dark-third-color) pl-2";

    return (
        <ContainerItem 
            title="Info Utente"
            className="w-full"  
        >
            <div className="flex items-center justify-between py-5">
                <div className="flex flex-col justify-center gap-4 h-full">
                    {/* Full name */}
                    <p className={labelClasses}>Nome: 
                        <span className={valueClasses}>{user.name} {user.lastName}</span>
                    </p>
                    {/* Email */}
                    <p className={labelClasses}>Email: 
                        <span className={valueClasses}>{user.email}</span>
                    </p>
                    {/* birthdate */}
                    <p className={labelClasses}>Data di nascita: 
                        <span className={valueClasses}>{user.birthdate}</span>
                    </p>
                    {/* Gender */}
                    <p className={labelClasses}>Sesso: 
                        <span className={valueClasses}>{user.gender}</span>
                    </p>
                </div>

                {/* User profile image */}
                <div className="bg-(--dark-third-color) dark:bg-gray-700 dark:border dark:border-gray-600 rounded-full size-16 2xl:size-20 flex items-center justify-center overflow-hidden">
                    {user.profileImage ? (
                        <img src={user.profileImage} alt="Profile image" />
                    ) : (
                        <UserRound className="size-7 2xl:size-9 text-(--light-color)" />
                    )}

                </div>
            </div>

        </ContainerItem>
    )
}