import { API, APIRequest  } from "vk-io";

const api = new API({
    token: "vk1.a.kGRM6_bH4HGnQPbK0jL6txVipppRadTcORDzR8idkgTkN71am01Lp5nNDumHhQ_KU4vllYnQ3DHMuDhfGZd-JdCH1brO2x7luvkXuqS5wyaf9DYiJGg6kFQwiSPoE9ruKaHObpsgzSFsjexV8XKDXUXpNR7QuMG6T4AsUhQeeR_fQZ9Vx3jn727iFqIhqb0KfZyD4yapZRyTR2VYLC2w5Q"
});

const request = new APIRequest({
    api,

    method: 'messages.edit',
    params: {
        peer_id: 1
    }
});

const response = await api.make();
