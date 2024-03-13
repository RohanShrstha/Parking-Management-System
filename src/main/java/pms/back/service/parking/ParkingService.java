package pms.back.service.parking;

import pms.back.dtos.parking.ParkingDTO;

import java.util.List;

public interface ParkingService {
    public ParkingDTO create(ParkingDTO dto);

    public List<ParkingDTO> getAll();

    public ParkingDTO getById(Integer id);

    public ParkingDTO update(ParkingDTO dto);

    public void deleteById(Integer id);

}
