import { BinaryLike, createHash, createHmac, Hmac, timingSafeEqual } from "crypto";
import { JSONConverter } from "./json-converter";

export class Hasher {
	static stringify(data: Record<never, unknown> | null): string {
		return JSON.stringify(data, JSONConverter);
	}

	static sha256Hex(data: string, encoding?: BufferEncoding): string {
		return createHash("sha256").update(Buffer.from(data, encoding)).digest("hex");
	}

	static sha256Buffer(dataBuffer: BinaryLike): Buffer {
		return createHash("sha256").update(dataBuffer).digest();
	}

	static sha512Hex(data: string, encoding: BufferEncoding): string {
		return createHash("sha512").update(Buffer.from(data, encoding)).digest("hex");
	}

	static sha512Buffer(dataBuffer: BinaryLike): Buffer {
		return createHash("sha512").update(dataBuffer).digest();
	}

	static hmacSha512Hex(key: string, keyEncoding: BufferEncoding, data: string, dataEncoding: BufferEncoding): string {
		return createHmac("sha512", Buffer.from(key, keyEncoding)).update(Buffer.from(data, dataEncoding)).digest("hex");
	}

	static hmacSha512Buffer(keyBuffer: BinaryLike, dataBuffer: BinaryLike): Buffer {
		return createHmac("sha512", keyBuffer).update(dataBuffer).digest();
	}

	static hmacSha512Stream(keyBuffer: BinaryLike): Hmac {
		return createHmac("sha512", keyBuffer);
	}

	static createHmacSha256(key: string, keyEncoding: BufferEncoding): Hmac {
		return createHmac("sha256", Buffer.from(key, keyEncoding));
	}

	static hmacSha256Hex(key: string, keyEncoding: BufferEncoding, data: string, dataEncoding: BufferEncoding): string {
		return createHmac("sha256", Buffer.from(key, keyEncoding)).update(Buffer.from(data, dataEncoding)).digest("hex");
	}

	static hmacSha256Buffer(keyBuffer: BinaryLike, dataBuffer: BinaryLike): Buffer {
		return createHmac("sha256", keyBuffer).update(dataBuffer).digest();
	}

	static timingSafeEqual(checksum: NodeJS.ArrayBufferView, digest: NodeJS.ArrayBufferView): boolean {
		return timingSafeEqual(checksum, digest);
	}
}
