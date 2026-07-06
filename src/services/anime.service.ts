import { prisma } from "../prisma/client";

export class AnimeService{

    async create(dados: {titulo: string; imagem: string; genero: string; ano: string; nota: number})
    {
        await prisma.anime.create({
            data: dados,
        });
    }

    async update(id:number, dados: {titulo: string; imagem: string; genero: string; ano: string; nota: number})
    {
        await prisma.anime.update({
            where:{id},
            data: dados,
        });
    }

    async delete(id: number)
    {
        await prisma.anime.delete({
            where: {id}
        });
    }

    async listAll()
    {
        return await prisma.anime.findMany();
    }

    async searchId(id: number)
    {
        return await prisma.anime.findUnique({
            where: {id}
        });
    }

}