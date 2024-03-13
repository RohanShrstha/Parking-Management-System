package pms.back.service.parking;

import pms.back.config.CustomMessageSource;
import pms.back.dtos.parking.ParkingDTO;
import pms.back.entity.parking.Parking;
import pms.back.repo.parking.ParkingRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@Slf4j

public class ParkingServiceImpl implements ParkingService {

    private ParkingRepo parkingRepo;

    private CustomMessageSource customMessageSource;


    public ParkingServiceImpl(ParkingRepo parkingRepo, CustomMessageSource customMessageSource) {
        this.parkingRepo = parkingRepo;
        this.customMessageSource = customMessageSource;
    }

    @Override
    public ParkingDTO create(ParkingDTO dto) {
        if (parkingRepo.findByParking_name(dto.getParking_name()).isPresent()&&dto.getParkingId()==null) {
            String errorMessage = customMessageSource.get("duplicate.name",
                    customMessageSource.get("parking"));
            throw new RuntimeException(errorMessage); // Custom exception for duplicate entity
        }
        Parking savedParking = parkingRepo.save(new ParkingDTO().toEntity(dto));
        return new ParkingDTO().toDto(savedParking);
    }

    @Override
    public List<ParkingDTO> getAll() {
        return parkingRepo.findAll().parallelStream().map(x ->
                new ParkingDTO().toDto(x)).collect(Collectors.toList());
    }

    @Override
    public ParkingDTO getById(Integer id) {
        return new ParkingDTO().toDto(parkingRepo.findById(id).orElseThrow(() ->
                new RuntimeException(
                        customMessageSource.get("error.not.found",
                                customMessageSource.get("parking")
                        )
                )
        ));
    }

    @Override
    public ParkingDTO update(ParkingDTO dto) {
        parkingRepo.findById(dto.getParkingId()).orElseThrow(
                ()-> new RuntimeException(customMessageSource.get("error.not.found","parking")));
        return new ParkingDTO().toDto(parkingRepo.save(new ParkingDTO().toEntity(dto)));
    }

    @Override
    public void deleteById(Integer id) {
        parkingRepo.findById(id).orElseThrow(() ->
                new RuntimeException(customMessageSource.get("error.not.found",
                        customMessageSource.get("parking"))
                )
        );
        parkingRepo.deleteById(id);
    }
}
