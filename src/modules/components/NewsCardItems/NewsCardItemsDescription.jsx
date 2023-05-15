/* eslint-disable react/prop-types */
export default function NewsCardItemsDescription({ description }) {
  return (
    <div className="ib-card-items__description">
      <p className="text-left">
        {description.length >= 250
          ? `${description.substring(0, 250)}...`
          : description}
      </p>
    </div>
  );
}
