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
import AuthForm from "@/components/ui/ui-component/auth-form"

export default function Login() {
  return (
    <AuthForm
        heading={"Login"}
        subheading={"Login with your own credentials"}
        link={'/signup'}
        linkSubheading={"Don't have an account ? "}
        linkHeading={"Signup"}
    />
  )
}
