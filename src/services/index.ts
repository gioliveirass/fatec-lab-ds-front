import api from "./api";
import { Props } from "../types/index";

class Service {
  async get(numero: number): Promise<Props> {
    const { data } = await api.get(`/${numero}`);
    return data;
  }
}

export default new Service();
