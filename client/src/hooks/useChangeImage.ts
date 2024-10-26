import { TImage } from "@/types"

function useChangeImage() {
    function changeImage(event: React.ChangeEvent<HTMLInputElement>): TImage | null {
        const file = event.target.files?.[0]

        if (file) {
          const imageUrl = URL.createObjectURL(file)

          return { file, url: imageUrl }
        }

        return null
    }

  return {
    changeImage,
  }
}

export default useChangeImage