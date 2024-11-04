import { ApiProperty } from "@nestjs/swagger";

export class CreateMissionDto {
    @ApiProperty()
    name: string
    @ApiProperty({required: true})
    description?: string
    @ApiProperty()
    type: string
    @ApiProperty()
    rewards: string
    @ApiProperty()
    level_required: number
    @ApiProperty({default: 'pending'})
    status: string
    @ApiProperty()
    deadline: Date
    @ApiProperty()
    creation_date: Date
}
