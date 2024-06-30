'use client'

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaLogin } from "@/schemas/Auth";

import { serverLogin } from "@/actions/loginServerAction";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { authRegister } from "@/services/apis/endpoints/auth";

function AuthRegister() {
  const form = useForm<z.infer<typeof SchemaLogin>>({
    resolver: zodResolver(SchemaLogin),
    defaultValues: {
      email: "admin@example.com",
      password: "QWEasd123"
    }
  })

  async function onSubmit(values: z.infer<typeof SchemaLogin>) {
    values.password_confirmation = "QWEasd123"
    values.name = "Woop"
    // serverLogin(values)
    const res = await authRegister(values)
    console.log("registerr res", res)
  }

  return (
    <div className="h-full">
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

          <Button type="submit">Register</Button>
        </form>
      </Form>
    </div>
  )
}

export default AuthRegister;
