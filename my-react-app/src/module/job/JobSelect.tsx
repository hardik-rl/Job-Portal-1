import CreatableSelect from "react-select";

const JobSelect = () => {
  const options = [
    { value: "all", label: "Any - All Locations" },
    { value: "mumbai", label: "Mumbai - HO" },
    { value: "akkalkot-road", label: "Akkalkot Road-Solapur" },
    { value: "solapur", label: "Chincholi - Solapur" },
    { value: "ankhleshwar", label: "Ankhleshwar" },
    { value: "panoli", label: "Panoli" },
    { value: "indore", label: "Indore" },
    { value: "dahej", label: "Dahej" },
  ];
  return <CreatableSelect isClearable options={options} />;
};

export default JobSelect;
