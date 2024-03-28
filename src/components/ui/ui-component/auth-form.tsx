import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export default function AuthForm({ heading, subheading, link, linkHeading,linkSubheading }: { heading: string, subheading: string, link:string, linkHeading:string, linkSubheading:string }) {
    return (
        <main className="full-screen-container flex items-center justify-center">
            <Card className="w-[350px] bg-gradient-to-l from-indigo-700 to-sky-400 text-black">
                <CardHeader>
                    <CardTitle>{heading}</CardTitle>
                    <CardDescription className="text-gray-800">{subheading}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Abc@123" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="*****" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <Button>{heading}</Button>
                            <Link href={'/forget-password'} className="text-muted underline cursor-pointer text-xs">forget password ?</Link>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className=" flex gap-2 text-xs">
                    <div>{linkSubheading}</div> <Link href={link} className="text-muted underline cursor-pointer" >{linkHeading}</Link>
                </CardFooter>
            </Card>
        </main>
    )
}
