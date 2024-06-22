'use client'
import React, {useEffect} from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// import useAuth from "@/context/Auth/useAuth";
// import IconLogo from "@/assets/IconLogo";
// import ImageAutositeBanner from "@/assets/images/AutositeBanner";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { authLogin } from "@/services/apis/requests/auth";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required",
  }),
  password: z.string().min(2, {
    message: "Password is required"
  })
})

function AuthLogin() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { setError, formState: { errors } } = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const a = await authLogin(values)
    console.log("fire", a)
  }


  return (

    <div className="h-full">

      <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 pt-6">
        <nav className="relative flex items-center justify-between sm:h-10">
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* <IconLogo className="h-8 w-8" /> */}
            Autosite
          </div>
        </nav>
      </div>


      <div className="flex flex-1 h-full">

        <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-scale-200 border-scale-500">
          <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">

            <div className="mb-10">
              <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Welcome back</h1>
              <h2 className="text-sm text-foreground-light">Sign in to your account</h2>
            </div>

            <Form {...form}>

              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {errors.server &&
                  <FormMessage>
                    {/* @ts-ignore */}
                    {errors?.server?.message}
                  </FormMessage>
                }

                <Button
                  label="Submit"
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                />
              </form>
            </Form>

            <div className="sm:text-center mt-8">
              <p className="px-8 text-center text-xs text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </main>


        {/* <aside className="relative overflow-hidden flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
          <div className="absolute inset-0 bg-zinc-900" />

          <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0">
            <ImageAutositeBanner />
          </div>

        </aside> */}
      </div>

    </div>
  )
}

export default AuthLogin;
