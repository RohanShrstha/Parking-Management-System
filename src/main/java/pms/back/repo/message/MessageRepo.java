package pms.back.repo.message;

import pms.back.entity.message.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MessageRepo  extends JpaRepository<Message,Integer> {
    Optional<Message> findByMessageEmail(String messageEmail);
}
