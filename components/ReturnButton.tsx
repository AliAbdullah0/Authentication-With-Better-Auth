import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface ReturnButtonProps{
    href:string;
    label:string;
}
const ReturnButton = ({href,label}:ReturnButtonProps) => {
  return (
    <Button asChild size={'sm'}>
        <Link href={href}>
        <ArrowLeft/>
        {label}
        </Link>
    </Button>
  )
}

export default ReturnButton