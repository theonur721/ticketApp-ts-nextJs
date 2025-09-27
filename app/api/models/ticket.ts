import mongoose, { Schema } from "mongoose";

//veritabanına bağlan
mongoose.connect(process.env.MONGO_URI as string);

//asenkron işlemler için ayarlar
mongoose.Promise = global.Promise;

//ticket şeması
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
  },
  { timestamps: true }
);

// ticket modelini oluştur
// eğer model daha önce oluşturulmuşsa onu kullan yoksa yeni oluştur
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

//ticket modelini dışa aktar
export default Ticket;
