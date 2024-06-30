'use client'

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaLogin } from "@/schemas/Auth";

import { serverLogin } from "@/actions/loginServerAction";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

function AuthLogin() {
  const form = useForm<z.infer<typeof SchemaLogin>>({
    resolver: zodResolver(SchemaLogin),
    defaultValues: {
      email: "admin@example.com",
      password: "QWEasd123"
    }
  })

  function onSubmit(values: z.infer<typeof SchemaLogin>) {
    serverLogin(values)
  }

  return (
    <div className="relative h-full">
      <div className="relative z-10 flex min-h-full flex-1 flex-col items-centers align-center justify-center py-12">


        <div className="bg-black/20 w-[470px] mx-auto">
          <div className="flex flex-col gap-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" className="mx-auto size-10">
              <path fill="url(#grad)" d="M254 483.034c-31.955 0-61.985-6.015-90.09-18.046-28.105-12.031-52.553-28.345-73.343-48.941-20.79-20.612-37.244-44.849-49.364-72.713C29.083 315.47 23.015 285.698 23 254.017c0-31.681 6.068-61.453 18.203-89.317 12.135-27.863 28.59-52.101 49.364-72.712 20.79-20.612 45.238-36.926 73.343-48.941C192.015 31.03 222.045 25.015 254 25c31.955 0 61.985 6.015 90.09 18.047 28.105 12.03 52.552 28.344 73.342 48.94 20.79 20.612 37.253 44.85 49.388 72.713 12.135 27.864 18.195 57.636 18.18 89.317v33.208c0 22.52-7.792 41.704-23.377 57.552-15.585 15.848-34.743 23.764-57.473 23.749-13.475 0-26.18-2.863-38.115-8.588-11.935-5.726-21.945-13.932-30.03-24.62-11.165 11.069-23.778 19.375-37.838 24.917-14.06 5.542-28.782 8.306-44.167 8.291-31.955 0-59.19-11.169-81.705-33.506-22.515-22.336-33.78-49.337-33.795-81.003 0-31.681 11.265-58.682 33.795-81.003 22.53-22.322 49.765-33.49 81.705-33.505 31.955 0 59.198 11.168 81.728 33.505 22.53 22.337 33.787 49.338 33.772 81.003v33.208c0 9.924 3.272 18.321 9.817 25.191 6.545 6.871 14.823 10.306 24.833 10.306 10.01 0 18.288-3.435 24.833-10.306 6.545-6.87 9.817-15.267 9.817-25.191v-33.208c0-51.147-17.903-94.469-53.708-129.967C349.287 88.552 305.59 70.803 254 70.803c-51.59 0-95.288 17.75-131.093 53.247C87.103 159.548 69.2 202.87 69.2 254.017c0 51.147 17.903 94.47 53.707 129.967 35.805 35.498 79.503 53.247 131.093 53.247h92.4c6.545 0 12.035 2.198 16.47 6.595 4.435 4.398 6.645 9.833 6.63 16.307 0 6.488-2.218 11.931-6.653 16.328-4.435 4.398-9.917 6.589-16.447 6.573H254Zm0-160.312c19.25 0 35.612-6.679 49.087-20.039 13.475-13.359 20.213-29.581 20.213-48.666 0-19.085-6.738-35.307-20.213-48.666-13.475-13.359-29.837-20.039-49.087-20.039-19.25 0-35.613 6.68-49.088 20.039-13.475 13.359-20.212 29.581-20.212 48.666 0 19.085 6.737 35.307 20.212 48.666 13.475 13.36 29.838 20.039 49.088 20.039Z"></path><defs><linearGradient id="grad" x1="20.567" x2="497.808" y1="22.592" y2="511.257" gradientUnits="userSpaceOnUse"><stop stop-color="#FF9797"></stop><stop offset="1" stop-color="#6D6AFF"></stop></linearGradient></defs></svg>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your username to sign in to your email</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="john@gmail.com"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="*********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Sign In</Button>
            </form>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default AuthLogin;
