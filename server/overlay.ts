import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function addMourningRibbon(memberId: number, firstName: string) {
  const baseName = `${firstName.toLowerCase()}.${memberId}`
  const inputPath = path.join(__dirname, `../public/assets/${baseName}.png`)
  const outputPath = path.join(__dirname, `../public/assets/${baseName}.luto.png`)
  const ribbonPath = path.join(__dirname, '../public/assets/fita_luto.png')

  console.log('Input:', inputPath)
  console.log('Output:', outputPath)
  console.log('Ribbon:', ribbonPath)

  try {
    const metadata = await sharp(inputPath).metadata()
    console.log('Dimensões:', metadata.width, 'x', metadata.height)

    const ribbonWidth = Math.floor(metadata.width! * 0.4)

    await sharp(inputPath)
      .composite([
        {
          input: await sharp(ribbonPath)
            .resize(ribbonWidth, null, { fit: 'inside' })
            .toBuffer(),
          gravity: 'southeast',
        }
      ])
      .toFile(outputPath)

    console.log('Fita aplicada com sucesso - arquivo criado:', outputPath)
  } catch (error) {
    console.error('Erro completo ao adicionar fita:', error)
  }
}
