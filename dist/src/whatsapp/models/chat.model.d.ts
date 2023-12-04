/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from 'mongoose';
export declare class ChatRaw {
    _id?: string;
    id?: string;
    owner: string;
}
export declare const ChatModel: import("mongoose").Model<ChatRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, ChatRaw> & ChatRaw & Required<{
    _id: string;
}>, Schema<ChatRaw, import("mongoose").Model<ChatRaw, any, any, any, import("mongoose").Document<unknown, any, ChatRaw> & ChatRaw & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChatRaw>> & import("mongoose").FlatRecord<ChatRaw> & Required<{
    _id: string;
}>>>;
export type IChatModel = typeof ChatModel;
