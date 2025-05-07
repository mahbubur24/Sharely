"use server";

import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function uploadImage(
  file: File | null | string,
  uploadTO: string
): Promise<{ success?: boolean; error?: string; filename?: string } | null> {
  if (!file) return null;
  if (typeof file === "string") return { success: true, filename: file };
  try {
    // Convert file to Buffer and write to disk
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create local directory to upload image
    const uploadPath = path.join(process.cwd(), uploadTO);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    // Generate a unique filename to prevent overwriting
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadPath, filename);

    await sharp(buffer)
      .resize({ width: 800 })
      .jpeg({ quality: 100 })
      .toFile(filePath);

    return { success: true, filename };
  } catch (error) {
    console.log({ error });

    return {
      success: false,
      error: "Something went wrong to upload image in local directory",
    };
  }
}
