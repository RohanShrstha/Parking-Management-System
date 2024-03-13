package pms.back.service.message;

import pms.back.dtos.message.MessageDTO;

import java.util.List;

public interface MessageService {
    public MessageDTO create(MessageDTO dto);

    public List<MessageDTO> getAll();

    public MessageDTO getById(Integer id);

    public MessageDTO update(MessageDTO dto);

    public void deleteById(Integer id);
}
