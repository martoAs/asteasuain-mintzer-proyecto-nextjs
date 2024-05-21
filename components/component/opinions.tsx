
import {CardContent, Card } from "@/components/ui/card"
import  StarIcon  from "@/components/component/staricon"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function Opinions(){

    return(

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                "I've been using the Fender American Professional II Stratocaster for a few months now, and it's
                been an absolute game-changer. The tone and playability are incredible, and it's quickly become my
                go-to guitar for both practice and live performances."
              </p>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-xs">
                  <div className="font-medium">John Doe</div>
                  <div className="text-gray-400">Musician</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-gray-600 stroke-gray-600" />
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                "The Yamaha P-125 digital piano has been a game-changer for my home studio. The weighted keys and
                realistic piano sound have helped me improve my playing, and the compact size makes it easy to fit
                in my small space."
              </p>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-xs">
                  <div className="font-medium">Sarah Anderson</div>
                  <div className="text-gray-400">Pianist</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                "The Shure SM58 microphone has been an essential part of my live setup for years. The sound quality
                is incredible, and it's incredibly durable, even after being dropped a few times on stage. Highly
                recommend it to any musician or vocalist."
              </p>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback />
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>



    )



}